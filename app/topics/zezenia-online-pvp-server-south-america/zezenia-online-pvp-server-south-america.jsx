import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-south-america');
}

export default function ZezeniaOnlinePvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-south-america" />;
}
