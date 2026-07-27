import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('znote-aac-with-players');
}

export default function ZnoteAacWithPlayersKeywordPage() {
  return <StaticKeywordPage slug="znote-aac-with-players" />;
}
