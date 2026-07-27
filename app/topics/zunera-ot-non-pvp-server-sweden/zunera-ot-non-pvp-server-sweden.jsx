import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-sweden');
}

export default function ZuneraOtNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-sweden" />;
}
