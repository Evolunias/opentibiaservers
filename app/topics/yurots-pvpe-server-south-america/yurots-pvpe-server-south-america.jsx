import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-pvpe-server-south-america');
}

export default function YurotsPvpeServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-pvpe-server-south-america" />;
}
