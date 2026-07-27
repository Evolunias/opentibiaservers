import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-with-active-players-server-north-america');
}

export default function ZuneraOtWithActivePlayersServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-with-active-players-server-north-america" />;
}
