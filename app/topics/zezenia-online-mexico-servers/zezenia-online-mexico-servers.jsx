import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-mexico-servers');
}

export default function ZezeniaOnlineMexicoServersKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-mexico-servers" />;
}
