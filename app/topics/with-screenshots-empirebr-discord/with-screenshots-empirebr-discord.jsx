import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-discord');
}

export default function WithScreenshotsEmpirebrDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-discord" />;
}
