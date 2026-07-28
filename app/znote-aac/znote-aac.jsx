import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('znote-aac');
}

export default function ZnoteAacPage() {
  return <StaticExactMatchPage slug="znote-aac" />;
}
