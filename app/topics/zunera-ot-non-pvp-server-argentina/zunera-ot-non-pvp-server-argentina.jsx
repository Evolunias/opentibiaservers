import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-argentina');
}

export default function ZuneraOtNonPvpServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-argentina" />;
}
