import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zezenia-online-discord');
}

export default function ZezeniaOnlineDiscordKeywordPage() {
  return <StaticKeywordPage slug="zezenia-online-discord" />;
}
