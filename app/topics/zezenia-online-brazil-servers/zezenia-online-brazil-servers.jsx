import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-brazil-servers');
}

export default function ZezeniaOnlineBrazilServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-brazil-servers" />;
}
