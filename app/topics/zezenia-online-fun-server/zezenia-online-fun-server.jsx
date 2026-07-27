import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-fun-server');
}

export default function ZezeniaOnlineFunServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-fun-server" />;
}
