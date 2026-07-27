import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-pvp-server-south-america');
}

export default function ZuneraOtPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-pvp-server-south-america" />;
}
