import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-pvp-server-canada');
}

export default function ZezeniaOnlinePvpServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-pvp-server-canada" />;
}
