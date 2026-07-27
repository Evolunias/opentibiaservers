import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-usa');
}

export default function ZuneraOtPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-usa" />;
}
