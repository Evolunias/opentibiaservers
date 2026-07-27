import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-germany-servers');
}

export default function ZezeniaOnlineGermanyServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-germany-servers" />;
}
