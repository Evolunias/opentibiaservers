import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-usa');
}

export default function ZnoteAacUsaKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-usa" />;
}
