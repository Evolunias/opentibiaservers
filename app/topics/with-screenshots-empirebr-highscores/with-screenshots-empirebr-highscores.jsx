import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-highscores');
}

export default function WithScreenshotsEmpirebrHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-highscores" />;
}
