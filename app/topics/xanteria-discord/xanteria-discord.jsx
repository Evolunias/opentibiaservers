import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-discord');
}

export default function XanteriaDiscordKeywordPage() {
  return <StaticKeywordPage slug="xanteria-discord" />;
}
