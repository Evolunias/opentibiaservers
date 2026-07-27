import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-serenity-register');
}

export default function WithScreenshotsSerenityRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-serenity-register" />;
}
