import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-with-discord-server-chile');
}

export default function YurotsWithDiscordServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-with-discord-server-chile" />;
}
