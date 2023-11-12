import { SetMetadata } from '@nestjs/common';
require('dotenv').config();
import * as process from "process";
export const IS_PUBLIC_KEY = process.env.PUBLIC_KEY;
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);