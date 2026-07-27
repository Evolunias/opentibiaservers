import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-mexico-server');
}

export default function ZezeniaOnlineMexicoServerKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-mexico-server" />;
}
