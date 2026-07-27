import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-ots');
}

export default function WithScreenshotsSerenityOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-ots" />;
}
