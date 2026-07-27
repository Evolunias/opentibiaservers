import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-usa');
}

export default function ZuneraOtNonPvpServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-usa" />;
}
