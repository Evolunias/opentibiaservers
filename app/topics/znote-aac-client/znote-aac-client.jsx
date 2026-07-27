import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-client');
}

export default function ZnoteAacClientKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-client" />;
}
