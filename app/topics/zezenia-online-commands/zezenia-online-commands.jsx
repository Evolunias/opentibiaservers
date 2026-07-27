import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-commands');
}

export default function ZezeniaOnlineCommandsKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-commands" />;
}
