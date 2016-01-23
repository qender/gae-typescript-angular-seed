from protorpc import messages
from google.appengine.ext import ndb


class Question(ndb.Model):
    """Question object"""
    questionText = ndb.StringProperty()
    questionnaire = ndb.StringProperty()
    order = ndb.IntegerProperty()
    questionType = ndb.StringProperty(default="MULTIPLE_CHOICE")


class QuestionForm(messages.Message):
    """Question outbound message"""
    questionText = messages.StringField(1)
    questionType = messages.EnumField('QuestionType', 1)


class Questionnaire(messages.Enum):
    """Questionnaire enum values"""
    JOB_SEEKER = 1
    EMPLOYER = 2


class QuestionType(messages.Enum):
    """QuestionType enum values"""
    MULTIPLE_CHOICE = 1