import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-south-america-servers');
}

export default function ZezeniaOnlineSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-south-america-servers" />;
}
