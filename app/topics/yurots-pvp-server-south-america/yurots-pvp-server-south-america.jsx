import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvp-server-south-america');
}

export default function YurotsPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvp-server-south-america" />;
}
