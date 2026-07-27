import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-similar-servers');
}

export default function ZuneraOtSimilarServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-similar-servers" />;
}
