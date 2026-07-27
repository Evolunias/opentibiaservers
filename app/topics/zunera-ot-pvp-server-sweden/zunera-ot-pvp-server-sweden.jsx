import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-sweden');
}

export default function ZuneraOtPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-sweden" />;
}
