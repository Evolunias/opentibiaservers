import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-with-discord-server');
}

export default function ZuneraOt14WithDiscordServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-with-discord-server" />;
}
