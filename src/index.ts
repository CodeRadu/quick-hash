#! /usr/bin/env node

import { createHash } from "crypto";

type HashingAlgorithms = "sha256" | "sha512" | "md5" | "sha1";

const hashingAlgorithm = process.argv[2] as HashingAlgorithms;
if (!hashingAlgorithm) process.exit(1);
const input = process.argv[3];
if (!input) process.exit(1);
const hashed = createHash(hashingAlgorithm).update(input).digest("hex");
console.log(hashed);
