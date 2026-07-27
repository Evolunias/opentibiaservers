import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-empirebr-wiki');
}

export default function WithScreenshotsEmpirebrWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-empirebr-wiki" />;
}
