import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-non-pvp');
}

export default function ZnoteAacNonPvpKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-non-pvp" />;
}
