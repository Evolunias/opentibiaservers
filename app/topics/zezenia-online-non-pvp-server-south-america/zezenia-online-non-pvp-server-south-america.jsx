import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-non-pvp-server-south-america');
}

export default function ZezeniaOnlineNonPvpServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-non-pvp-server-south-america" />;
}
