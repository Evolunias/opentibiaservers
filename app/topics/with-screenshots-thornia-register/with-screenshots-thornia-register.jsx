import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thornia-register');
}

export default function WithScreenshotsThorniaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thornia-register" />;
}
