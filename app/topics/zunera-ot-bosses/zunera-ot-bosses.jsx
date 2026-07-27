import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-bosses');
}

export default function ZuneraOtBossesKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-bosses" />;
}
