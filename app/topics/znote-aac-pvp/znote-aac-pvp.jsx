import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-pvp');
}

export default function ZnoteAacPvpKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-pvp" />;
}
