import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-mexico');
}

export default function ZuneraOtPvpServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-mexico" />;
}
