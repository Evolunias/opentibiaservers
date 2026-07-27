import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-argentina');
}

export default function ZuneraOtPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-argentina" />;
}
