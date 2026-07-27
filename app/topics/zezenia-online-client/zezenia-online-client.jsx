import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-client');
}

export default function ZezeniaOnlineClientKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-client" />;
}
