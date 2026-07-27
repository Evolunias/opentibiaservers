import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('visionot');
}

export default function VisionotPage() {
  return <StaticExactMatchPage slug="visionot" />;
}
