import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-sweden-servers');
}

export default function ZezeniaOnlineSwedenServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-sweden-servers" />;
}
