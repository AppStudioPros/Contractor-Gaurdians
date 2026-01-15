import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';
import { structure } from './structure';

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '9nystb6p';
const dataset = process.env.SANITY_STUDIO_DATASET || 'production';

export default defineConfig({
  name: 'contractor-guardians',
  title: 'Contractor Guardians',
  projectId,
  dataset,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: '2025-01-01' }),
  ],
  schema: {
    types: schemaTypes,
  },
});
