import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-brazil-server');
}

export default function ZezeniaOnlineBrazilServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-brazil-server" />;
}
