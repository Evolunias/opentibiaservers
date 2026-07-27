import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-non-pvp-server-south-america');
}

export default function ZuneraOtNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-non-pvp-server-south-america" />;
}
