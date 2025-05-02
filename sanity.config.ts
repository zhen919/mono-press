'use client'

import {defineConfig} from 'sanity'
import {apiVersion, dataset, projectId} from "@/sanity";
import {structureTool} from "sanity/structure";
import {schema} from "@/sanity/schemaTypes";
import {visionTool} from '@sanity/vision'
import {codeInput} from "@sanity/code-input";

export default defineConfig({
    basePath: '/studio',
    projectId,
    dataset,
    schema: {
        types: schema.types,
    },
    plugins: [
        structureTool(),
        visionTool({defaultApiVersion: apiVersion}),
        codeInput()
    ],
})
