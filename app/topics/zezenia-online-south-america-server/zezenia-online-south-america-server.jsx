import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-south-america-server');
}

export default function ZezeniaOnlineSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-south-america-server" />;
}
