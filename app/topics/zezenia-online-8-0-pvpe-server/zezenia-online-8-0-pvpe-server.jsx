import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-8-0-pvpe-server');
}

export default function ZezeniaOnline80PvpeServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-8-0-pvpe-server" />;
}
