import {
  S3Client,
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prismaClient = new PrismaClient();

const s3Client = new S3Client({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
  region: "ap-southeast-2",
});

// TODO: put an auth middleware that adds the userpub-address in the body
export async function GET() {
  const userId = Math.random();

  const command = new PutObjectCommand({
    Bucket: "datacoin-bucket",
    Key: `/data/${userId}/image.jpg`,
    ContentType: "img/jpg", // MEME type let's go baby!!!
  });

  const preSignedUrl = await getSignedUrl(s3Client, command, {
    expiresIn: 3600,
  });
  // console.log(preSignedUrl);

  return NextResponse.json({ presignedUrl: preSignedUrl });
}
