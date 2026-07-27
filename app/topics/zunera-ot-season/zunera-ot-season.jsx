import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-season');
}

export default function ZuneraOtSeasonKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-season" />;
}
